# GadgetHaven - E-commerce Platform

## Live Website Link
You can access the live website here: [Live Demo](<https://unique-creponne-397f7a.netlify.app/>)



## Features
- **Structured Navigation Bar**: Easy access to different sections like product categories, cart, wishlist, and user profile.
- **Product Categories**: Browse products categorized for better navigation and filtering.
- **Individual Product Details Pages**: Each product has a dedicated page with detailed information, images, and an "Add to Cart" option.
- **Shopping Cart**: Add and remove items from the cart with real-time updates on the total price.
- **Wishlist System**: Users can save items to their wishlist for future purchase.
- **Product Filtering**: Filter products by categories, price, ratings, and more.
- **Sort by Price**: Sort products based on price (low to high or high to low).
- **Data Persistence**: The shopping cart and wishlist data are managed using the Context API with LocalStorage support to retain data even after page reloads.
- **Smooth User Experience**: Responsive design ensuring smooth interactions across devices.
- **Edge Case Handling**: The app handles edge cases like price limits, prevents errors on reload, and ensures smooth user interactions.

## React Concepts Used
- **JSX**: For rendering HTML elements within JavaScript code.
- **Components**: Functional components used to structure the UI.
- **State & Props**: Managed with `useState` for individual component state and `useContext` for global state management.
- **Context API**: Used for global state management for cart and wishlist.
- **LocalStorage**: Used for persisting cart and wishlist data to maintain data across page reloads.
- **React Router**: For page navigation between home, product details, cart, and wishlist.
- **useEffect**: To handle side effects like data fetching and syncing the cart with LocalStorage.
- **useReducer**: For managing complex state logic in the cart and wishlist features.

## Data Management
- **Context API**: Used for managing global state across the app (cart and wishlist).
- **LocalStorage**: Data is persisted in LocalStorage to retain cart and wishlist information even when the page is reloaded.

## Features in Detail
1. **Product Categories**: Users can view products grouped by category for easier navigation.
2. **Individual Product Details**: Each product has its page with detailed descriptions, price, images, and an option to add to the cart.
3. **Cart Management**: Users can view their cart, update quantities, or remove items. The total price is updated in real-time.
4. **Wishlist System**: Users can save products to a wishlist for future consideration.
5. **Sorting and Filtering**: Products can be filtered by price range, category, and ratings, and sorted by price.



