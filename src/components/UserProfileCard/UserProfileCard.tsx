import React from 'react';
import type { UserProfileCardProps } from '../../types';

const UserProfileCard = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}: UserProfileCardProps) => {
  return (
    <div className="user-profile-card">
      <img src={user.avatarUrl || '/default-avatar.png'} alt={`${user.name}'s avatar`} className="w-16 h-16 rounded-full mx-auto mb-4" />
      <h2 className="text-lg font-bold text-center mb-2">{user.name}</h2>

      {showEmail && <p className="text-sm text-center text-gray-600">Email: {user.email}</p>}
      {showRole && <p className="text-sm text-center text-gray-500" >Role: {user.role}</p>}

      {children && <div className="mt-4">{children}</div>}

      {onEdit && (
        <button onClick={() => onEdit(user.id)} aria-label="Edit user" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" >
          Edit
        </button>
      )}
    </div>
  );
};

export default UserProfileCard;

