import React from 'react';
import './App.css'
import AlertBox from './components/AlertBox/AlertBox';
import UserProfileCard from './components/UserProfileCard/UserProfileCard';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import type { User, Product } from './types';

const demoUser: User = {
  id: '1',
  name: 'Khadija Amzoug',
  email: 'khadija@example.com',
  role: 'Frontend Developer',
  avatarUrl: '',
};

const demoProduct: Product = {
  id: '101',
  name: 'Eco-friendly Water Bottle',
  price: 19.99,
  description: 'A reusable, BPA-free water bottle made from recycled materials.',
  inStock: true,
  imageUrl: '',
};

function App() {
  return (
    <div className="App">
      <h1 className="text-xl font-bold">Component Demo</h1>

      <AlertBox type="success" message="Success! Everything went well.">
        <p className="text-sm">You can proceed to the next step.</p>
      </AlertBox>

      <AlertBox type="error" message="Error! Something went wrong.">
        <p className="text-sm">Please try again later.</p>
      </AlertBox>

      <AlertBox type="warning" message="Warning! Be careful with this action.">
        <p className="text-sm">This may affect your data.</p>
      </AlertBox>

      <AlertBox type="info" message="Info: Your profile is 90% complete.">
        <p className="text-sm">Complete your profile to get better suggestions.</p>
      </AlertBox>

      <UserProfileCard
        user={demoUser}
        showEmail={true}
        showRole={true}
        onEdit={(id) => alert(`Edit user ${id}`)}
      >
        <p className="text-sm text-gray-500">Welcome back, Khadija!</p>
      </UserProfileCard>

      <ProductDisplay
        product={demoProduct}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={(id) => alert(`Added product ${id} to cart`)}
      >
        <p className="text-sm text-green-600">Special promotion: Buy 1 Get 1 Free!</p>
      </ProductDisplay>
    </div>
  );
}

export default App;
