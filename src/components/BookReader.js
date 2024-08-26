import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Button,
  Progress,
  Card,
  CardBody,
  CardFooter,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiMenu,
  FiBookmark,
} from "react-icons/fi";

const BookReader = ({ book, onClose, relatedBooks, onSelectBook }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showTOC, setShowTOC] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, book.content.length - 1));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  const toggleBookmark = () => setBookmarked(!bookmarked);

  return (
    <div className="fixed inset-0 bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary z-50 overflow-hidden flex flex-col">
      <div className="bg-surface-light dark:bg-surface-dark p-4 flex justify-between items-center">
        <Button isIconOnly color="primary" variant="light" onPress={onClose}>
          <FiX />
        </Button>
        <h2 className="text-2xl font-bold text-primary-light dark:text-primary-dark">
          {book.title}
        </h2>
        <div className="flex space-x-2">
          <Button
            isIconOnly
            color="secondary"
            variant="light"
            onPress={toggleBookmark}
          >
            <FiBookmark className={bookmarked ? "fill-current" : ""} />
          </Button>
          <Button
            isIconOnly
            color="primary"
            variant="light"
            onPress={() => setShowTOC(true)}
          >
            <FiMenu />
          </Button>
        </div>
      </div>
      <div className="flex-grow overflow-auto p-8">
        <div className="max-w-3xl mx-auto">
          <img
            src={`/images/${book.cover}`}
            alt={book.title}
            className="w-full h-64 object-cover mb-8 rounded-lg"
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl font-bold mb-4 text-primary-light dark:text-primary-dark">
                {book.content[currentPage].split("\n")[0]}
              </h3>
              <p className="text-xl leading-relaxed">
                {book.content[currentPage].split("\n").slice(1).join("\n")}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="bg-surface-light dark:bg-surface-dark p-4">
        <div className="flex justify-between items-center max-w-3xl mx-auto">
          <Button
            isIconOnly
            color="primary"
            variant="light"
            onPress={prevPage}
            disabled={currentPage === 0}
          >
            <FiChevronLeft size={24} />
          </Button>
          <span className="text-sm">
            Page {currentPage + 1} of {book.content.length}
          </span>
          <Button
            isIconOnly
            color="primary"
            variant="light"
            onPress={nextPage}
            disabled={currentPage === book.content.length - 1}
          >
            <FiChevronRight size={24} />
          </Button>
        </div>
        <Progress
          color="primary"
          size="sm"
          value={(currentPage / (book.content.length - 1)) * 100}
          className="mt-4 max-w-3xl mx-auto"
        />
      </div>
      <div className="bg-surface-light dark:bg-surface-dark p-4">
        <h3 className="text-xl font-bold mb-4 text-primary-light dark:text-primary-dark">
          Related Books
        </h3>
        <div className="flex space-x-4 overflow-x-auto">
          {relatedBooks.map((relatedBook) => (
            <Card
              key={relatedBook.id}
              isPressable
              onPress={() => onSelectBook(relatedBook)}
              className="min-w-[250px]"
            >
              <CardBody className="p-0">
                <img
                  src={`/images/${relatedBook.cover}`}
                  alt={relatedBook.title}
                  className="w-full h-48 object-cover"
                />
              </CardBody>
              <CardFooter className="flex-col items-start p-4">
                <h4 className="text-lg font-semibold">{relatedBook.title}</h4>
                <Button color="primary" size="sm" className="mt-2">
                  Read Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Modal isOpen={showTOC} onClose={() => setShowTOC(false)}>
        <ModalContent>
          <ModalHeader>Table of Contents</ModalHeader>
          <ModalBody>
            {book.content.map((chapter, index) => (
              <Button
                key={index}
                color="primary"
                variant="light"
                className="w-full justify-start"
                onPress={() => {
                  setCurrentPage(index);
                  setShowTOC(false);
                }}
              >
                {chapter.split("\n")[0]}
              </Button>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BookReader;
