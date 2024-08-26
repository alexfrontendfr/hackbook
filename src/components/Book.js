import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiMenu } from "react-icons/fi";
import TableOfContents from "./TableOfContents";

const Book = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTocOpen, setIsTocOpen] = useState(false);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <TableOfContents
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isOpen={isTocOpen}
        setIsOpen={setIsTocOpen}
      />
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <button
          onClick={() => setIsTocOpen(!isTocOpen)}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <FiMenu size={24} />
        </button>
        <h2 className="text-2xl font-bold">Hackbook</h2>
        <div className="text-gray-600">
          Page {currentPage + 1} of {pages.length}
        </div>
      </div>
      <div className="relative h-[600px] overflow-hidden">
        <AnimatePresence initial={false} custom={currentPage}>
          <motion.div
            key={currentPage}
            custom={currentPage}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 p-8"
          >
            <h3 className="text-3xl font-bold mb-4">
              {pages[currentPage].title}
            </h3>
            <div className="prose max-w-none">{pages[currentPage].content}</div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="flex items-center px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
        >
          <FiChevronLeft className="mr-2" /> Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          className="flex items-center px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
        >
          Next <FiChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Book;
