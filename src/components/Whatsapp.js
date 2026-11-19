
export function whatsappLink(message) {
    return `https://wa.me/2348122926228?text=${encodeURIComponent(message)}`;
}

export function buildBookingMessage({ ticket}) {
    return [
        "Hi, I'd like to buy a ticket.",
        "",
        `Category: ${ticket}`,
    ].join("\n");
}

