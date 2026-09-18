function createOrder(items) {
  return {
    items,
    total: items.reduce((sum, i) => sum + i.price * i.qty, 0),
    status: 'pending',
  };
}

function applyDiscount(order, percent) {
  const discounted = order.total * (1 - percent / 100);
  return { ...order, total: discounted };
}

function cancelOrder(order) {
  return { ...order, status: 'cancelled', total: 0 };
}

function calculateLoyaltyPoints(order) {
    const basePoints = order.total || 0;
<<<<<<< HEAD
    return Math.round(basePoints);
=======
    
    if (basePoints > 100) {
        return Math.round(basePoints * 1.5);
    }
    
    return Math.round(basePoints);
>>>>>>> origin/feature/loyalty-points
}

function VIPBonus (order, isVIP) {
    if (isVIP) {
        return calculateLoyaltyPoints(order) * 1.5; // VIP customers get an extra 50 points
    }

    
module.exports = { createOrder, applyDiscount, cancelOrder, calculateLoyaltyPoints };
