"use client"

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from './animatedButton';

const ProjectForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    name: '',
    email: '',
    description: ''
  });
  
  const [showModal, setShowModal] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const projectTypes = ['Brand Strategy', 'Identity', 'Website', 'Product design', 'Other'];
  const budgetRanges = ['Under 10k', '€10k-€20k', '€20k-€50k', '€50k-€100k', '€100k+'];

  const handleButtonToggle = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field] === value ? '' : value
    }));
    setIsDirty(true);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setIsDirty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsDirty(false);
    onClose();
  };

  const handleClose = () => {
    if (isDirty) {
      setShowModal(true);
    } else {
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const SelectButton = ({ field, value, currentValue }) => (
    <motion.button
      type="button"
      onClick={() => handleButtonToggle(field, value)}
      className={`px-4 py-2 text-sm font-light rounded-full border transition-colors relative hover:border-neutral-black  duration-300 ${
        currentValue === value
          ?  'bg-neutral-black text-neutral-white'
          : 'border-neutral-light-grey hover:border-neutral-light-grey'
      }`}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.1 }}
    >
      {value}
    </motion.button>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-[1001]"
            onClick={handleOverlayClick}
          />

          {/* Form */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.5 }}
            className="fixed inset-y-2 max-h-screen z-[1002] bg-white overflow-y-auto rounded-xl hidden-scrollbar lg:w-1/2 lg:left-2 max-lg:inset-x-4"
          >
            <div className="min-h-screen p-8">
              <div className="max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                  <h1 className="text-4xl font-bold lg:text-5xl">Start a project</h1>
                  <button
                    onClick={handleClose}
                    className="block p-2 bg-pink-300 rounded-full transition-colors lg:hidden"
                  >
                    <X size={16} />
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <h2 className="text-xl mb-4 font-standard">What can we do for you?</h2>
                    <div className="flex flex-wrap gap-3">
                      {projectTypes.map((type) => (
                          <SelectButton
                          key={type}
                          field="projectType"
                          value={type}
                          currentValue={formData.projectType}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl mb-4 font-standard">Do you have a budget range?</h2>
                    <div className="flex flex-wrap gap-3">
                      {budgetRanges.map((range) => (
                          <SelectButton
                          key={range}
                          field="budget"
                          value={range}
                          currentValue={formData.budget}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl mb-4 font-standard">Your information</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-full border border-neutral-light-grey placeholder-shown:font-light focus:outline-none focus:border-black hover:border-black transition-colors duration-300"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-full border border-neutral-light-grey placeholder-shown:font-light  focus:outline-none focus:border-black hover:border-black transition-colors duration-300"
                        />
                      </div>
                      <textarea
                        name="description"
                        placeholder="Sell your dream!"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-2xl border border-neutral-light-grey placeholder-shown:font-light  focus:outline-none focus:border-black hover:border-black transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div
                    type="submit"
                    className="bg-white rounded-full flex justify-end ml-auto"
                  >
                    <AnimatedButton title={"submit"} containerStyles="bg-pink-300 text-black" />
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* "Forgot to submit" Modal */}
          <AnimatePresence>
            {showModal && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="fixed mx-4 inset-0 z-[1003] flex items-center justify-end p-4 lg:mr-8"
              >
                <div className="bg-neutral-white rounded-2xl p-6 pt-16 max-w-sm h-[20rem] w-full shadow-lg flex flex-col items-center justify-between">
                  <h2 className="text-4xl font-semibold mx-auto text-center">Forgot to press Submit?</h2>
                  <div className="flex justify-end space-x-4">
                    <button
                      onClick={() => setShowModal(false)}
                      className="px-6 py-2 rounded-full font-semibold max-md:text-sm"
                    >
                      Back to form
                    </button>
                    <button
                      onClick={() => {
                        setShowModal(false);
                        setIsDirty(false);
                        onClose();
                      }}
                      className="px-4 py-2 rounded-full font-semibold max-md:text-sm md:px-6 md:py-2"
                    >
                      Close anyway
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectForm;