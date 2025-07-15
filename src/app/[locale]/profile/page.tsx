import UserProfile from '@/widgets/profile/ui/UserProfile';
import AuthLayout from '../authLayout';

const Profile = () => {
  return (
    <AuthLayout>
      <div className="custom-container h-full flex gap-4 max-md:flex-col">
        <UserProfile />
      </div>
    </AuthLayout>
  );
};

export default Profile;
