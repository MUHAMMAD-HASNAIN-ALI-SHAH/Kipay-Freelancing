import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const Support = () => {
  const [activeTab, setActiveTab] = useState("faq");

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full mx-auto p-4">
        <img src="./Dashboard/support-header.png" className="w-full" alt="" />
      </div>

      <div className="flex flex-col gap-4 p-4 bg-[#262626] rounded-lg">
        {/* Tabs */}
        <div className="flex flex-wrap sm:flex-nowrap gap-3">
          <button
            className={`flex-1 sm:flex-none px-6 py-2 font-semibold border rounded-md ${
              activeTab === "faq"
                ? "bg-white text-[#4A4A4A] border-[#4A4A4A]"
                : "text-white border-[#4A4A4A]"
            }`}
            onClick={() => setActiveTab("faq")}
          >
            FAQ
          </button>
          <button
            className={`flex-1 sm:flex-none px-6 py-2 font-semibold border rounded-md ${
              activeTab === "email"
                ? "bg-white text-[#4A4A4A] border-[#4A4A4A]"
                : "text-white border-[#4A4A4A]"
            }`}
            onClick={() => setActiveTab("email")}
          >
            Email support
          </button>
          <button
            className={`flex-1 sm:flex-none px-6 py-2 font-semibold border rounded-md ${
              activeTab === "chat"
                ? "bg-white text-[#4A4A4A] border-[#4A4A4A]"
                : "text-white border-[#4A4A4A]"
            }`}
            onClick={() => setActiveTab("chat")}
          >
            Chat with us
          </button>
        </div>

        {/* FAQ Section */}
        {activeTab === "faq" && (
          <div className="w-full mx-auto">
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">
                  Q: How do I apply for a card on the platform, and what should I expect?
                </AccordionTrigger>
                <AccordionContent className="text-[#8E8E93] text-lg">
                  Applying for a card on our platform is a simple and secure process designed to get you up and running quickly. To begin, navigate to the “Cards” section in your dashboard and select “Apply for a New Card.” You’ll be prompted to choose between a virtual card (ideal for online payments) or a physical card (which can be delivered to your address for in-store use).
                  <br /><br />
                  Once you’ve selected your card type, you’ll fill out a short application form with basic information such as your full name, preferred card currency, and ID verification details if required. In some cases, depending on regulatory compliance, additional documentation may be requested to complete your verification.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl">
                  Q: What types of cards can I apply for on this platform?
                </AccordionTrigger>
                <AccordionContent className="text-[#8E8E93] text-lg">
                  You can apply for two types of cards: virtual cards and physical cards. Virtual cards are best for online purchases and are available instantly. Physical cards can be used for in-store transactions and are delivered to your registered address.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl">
                  Q: Can I use my virtual card for international transactions?
                </AccordionTrigger>
                <AccordionContent className="text-[#8E8E93] text-lg">
                  Yes, virtual cards can be used for international transactions, provided they are supported by the merchant and comply with local and international regulations. Ensure your card is funded and has been activated before use.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}

        {/* Email Support Section */}
        {activeTab === "email" && (
          <div className="text-white p-4 flex flex-col sm:w-[70%] gap-4">
            <input
              type="text"
              placeholder="Your email address"
              className="w-full px-4 py-3 bg-[#313131] text-[#A0A3BD] placeholder-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-[#313131]"
            />
            <textarea
              placeholder="Enter your message"
              rows={5}
              className="w-full resize-none px-4 py-3 bg-[#313131] text-[#A0A3BD] placeholder-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-[#313131]"
            />
            <button className="w-full sm:w-[40%] bg-[#7A6EFF] py-3 px-4 rounded-xl text-white font-bold">
              Submit message
            </button>
          </div>
        )}

        {/* Chat With Us Section */}
        {activeTab === "chat" && (
          <div className="text-white p-4">
            Chat support is available from 9am to 6pm (Mon–Fri). Click the chat icon in the bottom right corner to start a conversation.
          </div>
        )}
      </div>
    </div>
  );
};

export default Support;
