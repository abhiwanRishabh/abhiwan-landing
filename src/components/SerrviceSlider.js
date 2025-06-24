import dynamic from "next/dynamic";

// Use dynamic import to avoid SSR issues with framer-motion
const XRSlider = dynamic(() => import("@/components/service/XRSlider"), {
  ssr: false,
});
const SerrviceSlider = () => {
  return (
    <>
      <XRSlider />
    </>
  );
};

export default SerrviceSlider;
