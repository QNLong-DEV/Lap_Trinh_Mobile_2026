# Buổi 9 – Trả lời câu hỏi bổ sung

## 1. Giá trị dẫn xuất
`errors` và `valid` chỉ là kết quả suy ra từ `name`, `phone`, `address` và `items`. Tính lại mỗi lần render thì chúng luôn khớp với dữ liệu hiện tại. Nếu lưu bằng `useState`, mỗi chỗ gọi `setName`, `setPhone`, `setAddress` (và cả khi giỏ thay đổi) đều phải nhớ cập nhật thêm `errors`/`valid`. Chỉ cần quên một chỗ là lỗi hiện sai hoặc nút mở/khoá sai. Ngoài ra mỗi lần đổi còn phải render thêm một lần.

## 2. Thứ tự gọi
Nếu `clear()` chạy trước `await createOrder(...)` mà mất mạng thì giỏ đã bị xoá (cả trong AsyncStorage) trong khi server chưa tạo đơn: người dùng mất hết hàng đã chọn và phải chọn lại từ đầu. Đặt `clear()` ngay sau `await createOrder(...)` thì giỏ chỉ bị xoá khi server đã nhận đơn. Nếu lỗi, code nhảy vào `catch` và giỏ vẫn còn nguyên để bấm thử lại.

## 3. PUT hay PATCH
`PUT /users/1` với `{ name, phone }` sẽ thay cả bản ghi, nên user chỉ còn `{ id, name, phone }`: mất `email` và `password`, và lần sau không đăng nhập được nữa. `PATCH` chỉ đổi những trường được gửi lên, giữ nguyên các trường còn lại, nên phù hợp với form chỉ sửa một phần hồ sơ.

## 4. Cập nhật lạc quan
Nếu bỏ phần hoàn lại `read: false` trong `catch` thì khi mất mạng, giao diện báo "đã đọc" nhưng server vẫn là "chưa đọc". Lần sau mở màn, thông báo lại quay về chưa đọc, làm người dùng khó hiểu (dữ liệu trên màn hình và trên server không khớp).
- **Nên dùng** cách lạc quan cho thao tác nhẹ, ít khi lỗi, có thể hoàn lại: thả tim / thêm vào **Yêu thích**, đánh dấu đã đọc.
- **Không nên** dùng cho **thanh toán / đặt hàng**: phải chờ server xác nhận đã nhận đơn rồi mới báo thành công và xoá giỏ.

## 5. Code bổ sung: bộ lọc trạng thái ở màn Đơn hàng
Đã cài trong `src/screens/OrdersScreen.tsx`:

```tsx
type StatusFilter = "all" | OrderStatus;
const [status, setStatus] = useState<StatusFilter>("all");

const visibleOrders = useMemo(
  () => orders.filter((o) => status === "all" || o.status === status),
  [orders, status]
);

// Hàng chip: Tất cả / Chờ xác nhận / Đang giao / Hoàn tất / Đã huỷ → onPress={() => setStatus(f.key)}
<FlatList data={visibleOrders} ... />
```

Nếu đang lọc mà không có đơn nào khớp, màn hiện "Không có đơn nào ở trạng thái này" kèm nút "Xem tất cả".

*(Ảnh chụp màn hình: chạy app rồi chụp màn Checkout, Đơn hàng (có bộ lọc), Hồ sơ, Thông báo.)*

---

## Ghi chú nộp bài
- Đã làm **thử thách BT9.C1 "Mua lại"**: nút chỉ hiện ở đơn **Hoàn tất**. Bấm vào thì gọi `getBooks()` để lấy giá và tồn kho mới nhất, cộng dồn số lượng nếu sách đã có trong giỏ (`setQty` tự chặn ở tồn kho), rồi chuyển sang tab Giỏ.
- Chạy app: `npm run api` (json-server cổng 3000) và `npx expo start` ở thư mục gốc `tuan1prj`. Muốn đưa `db.json` về dữ liệu ban đầu thì chạy `npm run api:reset`.
- Tài khoản demo: `demo@bookstore.vn` / `123456`.
