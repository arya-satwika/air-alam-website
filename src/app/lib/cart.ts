
// items:
// 220ml : id 1 1.8k
// 330ml : id 2 3.5k
// 500ml : id 3 10k
// 600ml : id 4 5.5k
// 1.5l : id 5 9.5k
// 19l : id 6 28k

export type Cart = {
    id: number,
    quantity: number
}

export const items = [
    { name: "AirAlam 220ml", price: 1800 },
    { name: "AirAlam 330ml", price: 3500 },
    { name: "AirAlam 500ml", price: 10000 },
    { name: "AirAlam 600ml", price: 5500 },
    { name: "AirAlam 1.5l", price: 9500 },
    { name: "AirAlam 19l", price: 28000 },
]

export function getCart(): Cart[] {
    try {
        const raw = localStorage.getItem("cart");
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

export function saveCart(cart: Cart[]): void{
    localStorage.setItem("cart", JSON.stringify(cart));
    if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("cart-updated"));
    }
}

export function addToCart(itemId: number, quantity: number): void {
    const cart = getCart();
    console.log(cart);
    const exisItem = cart.find(item => item.id === itemId);

    if (exisItem) {
        exisItem.quantity += quantity;
    } else {
        cart.push({ id: itemId, quantity});
    }
    saveCart(cart);
}

export function removeFromCart(itemId: number): Cart[] {
    const cart = getCart();
    const updated = cart.filter(item=> item.id !== itemId);
    saveCart(updated);
    return updated;
}

export function clearCart(){
    localStorage.removeItem("cart");
}

export function calculateTotal(cart: Cart[]): number {
    let total = 0;
    for (const item of cart) {
        const itemData = items[item.id ];
        total += itemData ? itemData.price * item.quantity : 0;
    }
    return total;
}
