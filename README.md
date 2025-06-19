# Component Library Lab

## Overview

This lab is part of our internal efforts to build a reusable, type-safe React component library using **TypeScript**. The focus is on creating clean, well-typed components that support prop composition, flexible display, and clear documentation.

## Lab Objective

By the end of this project, you will have:

- Created reusable React components with TypeScript interfaces.
- Handled props correctly and implemented optional props.
- Used component composition to combine UI elements.
- Followed TypeScript best practices.
- Documented usage examples for all components.

---

## Project Setup

This project was created using **Vite** with the React + TypeScript template.

### To run the project locally:

```bash
npm install
npm run dev
```

### Folder Structure
src/
  components/
    AlertBox/
      AlertBox.tsx
      AlertBox.test.tsx
    UserProfileCard/
      UserProfileCard.tsx
      UserProfileCard.test.tsx
    ProductDisplay/
      ProductDisplay.tsx
      ProductDisplay.test.tsx
  types/
    index.ts

#Components
## 1.  AlertBox
Displays alert messages with different types (success, error, warning, info) and supports optional close functionality.

### Props:

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

### Example:
<AlertBox
  type="success"
  message="Profile updated!"
  onClose={() => alert('Closed')}
>
  <p className="text-sm">You may continue using the app.</p>
</AlertBox>

# 2. UserProfileCard
Displays user profile details with configurable email/role visibility and an edit button.
###Props:
```ts
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}
```
#Exemple 
```ts
<UserProfileCard
  user={user}
  showEmail={true}
  showRole={true}
  onEdit={(id) => alert(`Edit user ${id}`)}
>
  <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
</UserProfileCard>
```

#3.  ProductDisplay

Displays product information like name, price, stock status, and description, with an "Add to Cart" feature.

###Props:
```ts
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}

interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}
```

###Exemple:

```ts
<ProductDisplay
  product={product}
  showDescription={true}
  showStockStatus={true}
  onAddToCart={(id) => alert(`Added product ${id} to cart`)}
>
  <div className="text-sm text-gray-500">Free shipping available</div>
</ProductDisplay>
```

#Component Composition Example

```ts
<AlertBox
  type="success"
  message="Product added to cart!"
  onClose={() => setShowAlert(false)}
/>

<UserProfileCard user={user} showEmail={true} showRole={true} />

<ProductDisplay
  product={product}
  showDescription={true}
  showStockStatus={true}
  onAddToCart={handleAddToCart}
/>
```
#Type Safety


All props are strictly typed using TypeScript interfaces.
Optional props are marked with ? and handled safely inside each component using default values or conditional rendering.

# Reflection Questions
### How did you handle optional props in your components?
We used TypeScript’s optional property syntax (?) in our interfaces, then applied conditional rendering in the component logic to check if those props were passed. This ensured that our components worked reliably whether the optional props were provided or not.

### What considerations did you make when designing the component interfaces?
We focused on:

Keeping interfaces clean and minimal.

Making components reusable in different contexts.

Including optional properties for flexibility (like children, onClose, showEmail).

Ensuring all data types are strongly typed and well-documented.

### How did you ensure type safety across your components?
All props were defined using TypeScript interfaces.
No usage of any was allowed.
Instead, we:

Defined custom types like AlertType.

Imported and reused interfaces in multiple components from the types/ folder.

Got full IntelliSense and compiler help for catching type issues early.

### What challenges did you face when implementing component composition?
Some of the challenges included:

Passing down the right props between parent and child components.

Managing shared state and triggering updates (e.g., handling cart logic).

Ensuring that styles and layouts remain consistent across different usage combinations.

Keeping components loosely coupled but still interoperable.

#Credits
Developed by Khadija Amzoug
Built with ❤️ using React, TypeScript 

#License
This project is for educational and internal use only.
No external reuse without permission.





