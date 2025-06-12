import UserProfile from '@/widgets/profile/ui/UserProfile';
import React from 'react';

const Profile = () => {
  return (
    <div className="custom-container h-full flex gap-4 max-md:flex-col">
      <UserProfile />
    </div>
  );
};

export default Profile;
