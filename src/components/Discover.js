import React from "react";
import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FiBookOpen, FiTrendingUp, FiUsers, FiBriefcase } from "react-icons/fi";

const categories = [
  {
    icon: FiBookOpen,
    label: "Self-Help Classics",
    description: "Timeless wisdom for personal growth",
  },
  {
    icon: FiTrendingUp,
    label: "Trending Topics",
    description: "Stay updated with the latest in personal development",
  },
  {
    icon: FiUsers,
    label: "Community Favorites",
    description: "Books loved by the Hackbook community",
  },
  {
    icon: FiBriefcase,
    label: "Career Growth",
    description: "Boost your professional skills and mindset",
  },
];

const Discover = () => {
  return (
    <div className="py-12 bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-primary-light dark:text-primary-dark">
            Discover New Horizons
          </h1>
          <p className="text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
            Explore a world of knowledge and personal growth with our carefully
            curated collection of books. Find your next inspirational read and
            embark on a journey of self-improvement.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-surface-light dark:bg-surface-dark h-full">
                <CardBody className="flex flex-col items-center p-6">
                  <category.icon className="text-5xl mb-4 text-primary-light dark:text-primary-dark" />
                  <h3 className="text-xl font-semibold mb-2">
                    {category.label}
                  </h3>
                  <p className="text-sm text-center text-text-light-secondary dark:text-text-dark-secondary">
                    {category.description}
                  </p>
                </CardBody>
                <CardFooter>
                  <Button color="primary" variant="flat" className="w-full">
                    Explore
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
