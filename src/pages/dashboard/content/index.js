import ContentPage from "@/components/Content/ContentPage";
import RevenueSection from "@/components/Content/RevenueSection";
import DashboardLayout from "@/components/Layout/DashboardSidbar/DashboardLayout";

const Content = () => {
  return (
    <DashboardLayout>
      <ContentPage/>
       <RevenueSection/>
    </DashboardLayout>
  );
};

export default Content;
