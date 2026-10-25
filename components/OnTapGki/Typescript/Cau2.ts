function formatPrice(price: number, currency?: string): string {
    return price + " " + (currency ?? "VND");;
}

type UpdateCallback = (isSuccess: boolean) => void

async function saveData(): Promise<boolean> {
    const res = await fetch(``);
    return true;
}