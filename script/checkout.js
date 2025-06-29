
document.addEventListener('DOMContentLoaded', () => {

  const placeOrderBtn = document.querySelector('.place-order-button');
  placeOrderBtn.addEventListener('click', () => {
    alert('Thank you! Your order has been placed.');
  });

  // Handle all "Update" buttons
  const updateButtons = document.querySelectorAll('.update-quantity-link');
  updateButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const quantityLabel = button.parentElement.querySelector('.quantity-label');
      const newQuantity = prompt('Enter new quantity:', quantityLabel.textContent);
      if (newQuantity && !isNaN(newQuantity) && Number(newQuantity) > 0) {
        quantityLabel.textContent = newQuantity;
      } else {
        alert('Please enter a valid number greater than 0.');
      }
    });
  });

  // Handle all "Delete" buttons
  const deleteButtons = document.querySelectorAll('.delete-quantity-link');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const cartItem = button.closest('.cart-item-container');
      cartItem.remove();
    });
  });
});
