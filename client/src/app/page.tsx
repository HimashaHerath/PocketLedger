import Hero from "@/sections/Hero";
import lottieAnimation from "../../public/Hero.json";

const Page = () => {
  return (
    <Hero
      lottieSrc={lottieAnimation}
      title="Welcome to PocketLedger!"
      subtitle="Manage Your Finances with Ease"
      description="Track your expenses, manage your budgets, and get insights into your financial health with PocketLedger. Start managing your finances efficiently today."
      primaryLink="/"
      secondaryLink="/auth"
      primaryButtonText="Get Started"
      secondaryButtonText="Sign In"
    />
  );
};

export default Page;
