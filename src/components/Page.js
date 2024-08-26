import React from "react";
import { useSpring, animated } from "@react-spring/three";
import { Html } from "@react-three/drei";
import Content from "./Content";

const Page = ({ content, position, rotation, isActive }) => {
  const { pageRotation } = useSpring({
    pageRotation: rotation[1],
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <animated.mesh position={position} rotation-y={pageRotation}>
      <planeGeometry args={[1.5, 2]} />
      <meshStandardMaterial color="white" />
      <Html
        transform
        occlude
        style={{
          width: "300px",
          height: "400px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          opacity: isActive ? 1 : 0.3,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <div className="flex flex-col h-full">
          {/* Hick's Law: Simplify choices */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-500">
              Page {content.pageNumber}
            </h3>
          </div>

          {/* Miller's Law: Group related information */}
          <div className="flex-grow overflow-y-auto">
            <Content content={content} />
          </div>

          {/* Fitts's Law: Make interactive elements larger and easier to click */}
          <div className="mt-4 flex justify-between">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">
              Previous
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">
              Next
            </button>
          </div>
        </div>
      </Html>
    </animated.mesh>
  );
};

export default Page;
