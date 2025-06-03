import React, { useState } from 'react';
import { MessageCircle, User, Bot, Clock, Package, Search } from 'lucide-react';
import { ChatConversation, ChatMessage } from '../types';
import { mockChatConversations } from '../data/mockData';

const ChatBot: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<ChatConversation | null>(
    mockChatConversations[0]
  );
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConversations = mockChatConversations.filter(
    conv =>
      conv.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.messages.some(msg => 
        msg.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.orderNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.productId?.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'resolved': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: 'short'
    }).format(date);
  };

  const extractOrderInfo = (message: ChatMessage) => {
    if (message.orderNumber) {
      return (
        <div className="mt-2 p-2 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 text-sm text-blue-700">
            <Package className="w-4 h-4" />
            <span className="font-medium">Order: {message.orderNumber}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  const extractProductInfo = (message: ChatMessage) => {
    if (message.productId) {
      return (
        <div className="mt-2 p-2 bg-purple-50 rounded-lg border border-purple-200">
          <div className="flex items-center gap-2 text-sm text-purple-700">
            <Package className="w-4 h-4" />
            <span className="font-medium">Product SKU: {message.productId}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-full flex bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Conversations List */}
      <div className="w-1/3 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Chat Conversations</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedConversation?.id === conversation.id ? 'bg-primary-50 border-primary-200' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-gray-900">{conversation.customerName}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(conversation.status)}`}>
                  {conversation.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{conversation.customerEmail}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                <span>Last activity: {formatTime(conversation.lastActivity)}</span>
              </div>
              <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                {conversation.messages[conversation.messages.length - 1]?.message}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{selectedConversation.customerName}</h3>
                  <p className="text-sm text-gray-600">{selectedConversation.customerEmail}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedConversation.status)}`}>
                  {selectedConversation.status}
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedConversation.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-gray-600" />
                      ) : (
                        <Bot className="w-4 h-4 text-primary-600" />
                      )}
                      <span className="text-xs text-gray-500">
                        {message.sender === 'user' ? 'Customer' : 'Support Bot'}
                      </span>
                      <span className="text-xs text-gray-400">
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.message}</p>
                      {extractOrderInfo(message)}
                      {extractProductInfo(message)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MessageCircle className="w-4 h-4" />
                <span>Conversation started: {formatTime(selectedConversation.createdAt)}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Select a conversation to view messages</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot; 