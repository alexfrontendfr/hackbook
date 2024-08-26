import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const BookShelf = ({ books, onSelectBook }) => {
  const loadingBooks = [1, 2, 3]; // For loading placeholders

  return (
    <div className="py-12">
      <motion.h1
        className="text-4xl font-heading font-bold mb-8 text-center text-primary-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Continue Your Journey
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              isPressable
              onPress={() => onSelectBook(book)}
              className="h-full flex flex-col overflow-hidden"
            >
              <CardBody className="p-0">
                <Image
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-[400px] object-cover"
                />
              </CardBody>
              <CardFooter className="flex-col items-start bg-neutral-100 dark:bg-neutral-800">
                <h3 className="text-lg font-heading font-semibold text-primary-600 dark:text-primary-400">
                  {book.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans">
                  {book.author}
                </p>
                <Button
                  color="primary"
                  variant="flat"
                  size="sm"
                  className="mt-2 font-sans"
                  onPress={() => onSelectBook(book)}
                >
                  Continue Reading
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
        {loadingBooks.map((_, index) => (
          <motion.div
            key={`loading-${index}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (books.length + index) * 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden">
              <CardBody className="p-0">
                <div className="w-full h-[400px] bg-neutral-200 dark:bg-neutral-700 animate-pulse" />
              </CardBody>
              <CardFooter className="flex-col items-start bg-neutral-100 dark:bg-neutral-800">
                <div className="w-3/4 h-6 bg-neutral-200 dark:bg-neutral-700 animate-pulse mb-2" />
                <div className="w-1/2 h-4 bg-neutral-200 dark:bg-neutral-700 animate-pulse mb-2" />
                <div className="w-1/3 h-8 bg-neutral-200 dark:bg-neutral-700 animate-pulse" />
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
