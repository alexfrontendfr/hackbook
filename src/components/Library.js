import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Button, Switch } from "@nextui-org/react";
import Typography from "./Typography";

const Library = ({ books, onSelectBook }) => {
  const [userLibrary, setUserLibrary] = useState([]);

  const toggleBookInLibrary = (book) => {
    setUserLibrary((prev) =>
      prev.some((b) => b.id === book.id)
        ? prev.filter((b) => b.id !== book.id)
        : [...prev, book]
    );
  };

  return (
    <div className="py-12 bg-background-dark text-text-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Typography
            variant="h1"
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400"
          >
            My Library
          </Typography>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-surface-dark hover:bg-opacity-80 transition-all duration-300 h-full">
                <CardBody className="p-0">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-64 object-cover"
                  />
                </CardBody>
                <CardFooter className="flex-col items-start p-4">
                  <Typography variant="h3" className="text-primary-400">
                    {book.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-text-dark-secondary mt-2 mb-4"
                  >
                    {book.description}
                  </Typography>
                  <div className="flex justify-between items-center w-full">
                    <Button
                      color="primary"
                      auto
                      onPress={() => onSelectBook(book)}
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold"
                    >
                      Read
                    </Button>
                    <Switch
                      checked={userLibrary.some((b) => b.id === book.id)}
                      onChange={() => toggleBookInLibrary(book)}
                      color="secondary"
                    >
                      <Typography
                        variant="body2"
                        className="text-text-dark-secondary"
                      >
                        {userLibrary.some((b) => b.id === book.id)
                          ? "In Library"
                          : "Add to Library"}
                      </Typography>
                    </Switch>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
