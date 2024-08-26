import React from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const TableOfContents = ({ book, currentPage, setCurrentPage, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="fixed inset-y-0 left-0 bg-white w-64 shadow-lg p-4 z-50"
    >
      <h3 className="text-xl font-heading font-bold mb-4">Table of Contents</h3>
      <ul className="space-y-2">
        {book.content.map((_, index) => (
          <li key={index}>
            <Button
              color={currentPage === index ? "primary" : "default"}
              variant="flat"
              size="sm"
              fullWidth
              onPress={() => {
                setCurrentPage(index);
                onClose();
              }}
            >
              Page {index + 1}
            </Button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TableOfContents;
