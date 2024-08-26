import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import Typography from "./Typography";

const HomePage = ({ books, onSelectBook }) => {
  return (
    <div className="py-12 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Typography
            variant="h1"
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400"
          >
            Explore Your Personal Growth Journey
          </Typography>
          <Typography variant="body1" className="text-text-dark-secondary mt-4">
            Discover transformative books to elevate your mind and spirit.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {books.map((book, index) => (
            <Card
              key={book.id}
              isPressable
              onPress={() => onSelectBook(book)}
              className="bg-surface-dark hover:bg-opacity-80 transition-all duration-300 h-full"
            >
              <CardBody className="p-0">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
              </CardBody>
              <CardFooter className="flex-col items-start p-4">
                <Typography variant="h3" className="text-text-dark-primary">
                  {book.title}
                </Typography>
                <Typography
                  variant="body2"
                  className="text-text-dark-secondary mt-2 mb-4"
                >
                  {book.description}
                </Typography>
                <Button
                  color="primary"
                  auto
                  onPress={() => onSelectBook(book)}
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold"
                >
                  Start Reading
                </Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
