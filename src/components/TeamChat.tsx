import React, { useState } from 'react';
import { Hash, Users, Clock, Smile, AtSign, Send } from 'lucide-react';
import { mockTeamChat, mockTeamMembers } from '../data/mockData';
import { TeamChatChannel } from '../types';

const TeamChat: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState<TeamChatChannel>(mockTeamChat[0]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to the backend
      setNewMessage('');
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getChannelIcon = (type: string) => {
    switch (type) {
      case 'general':
        return <Hash className="w-4 h-4" />;
      case 'support':
        return <Users className="w-4 h-4" />;
      default:
        return <Hash className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex h-[600px] bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Channel Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Team Channels</h3>
        </div>
        <div className="p-2">
          {mockTeamChat.map((channel) => (
            <button
              key={channel.id}
              onClick={() => setSelectedChannel(channel)}
              className={`w-full flex items-center space-x-2 p-3 rounded-lg text-left transition-colors ${
                selectedChannel.id === channel.id
                  ? 'bg-primary-100 text-primary-700'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {getChannelIcon(channel.type)}
              <span className="font-medium">#{channel.name}</span>
              {channel.unreadCount > 0 && (
                <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {channel.unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Channel Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {getChannelIcon(selectedChannel.type)}
              <h2 className="font-semibold text-gray-900">#{selectedChannel.name}</h2>
              <span className="text-sm text-gray-500">
                {selectedChannel.members.length} members
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500">
                Last activity: {formatTime(selectedChannel.lastActivity)}
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-1">{selectedChannel.description}</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {selectedChannel.messages.map((message) => (
            <div key={message.id} className="flex space-x-3">
              <img
                src={message.author.avatar || `https://ui-avatars.com/api/?name=${message.author.name}&background=3b82f6&color=fff`}
                alt={message.author.name}
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium text-gray-900">{message.author.name}</span>
                  <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                </div>
                <p className="text-gray-700">{message.content}</p>
                {message.reactions.length > 0 && (
                  <div className="flex space-x-2 mt-2">
                    {message.reactions.map((reaction, index) => (
                      <button
                        key={index}
                        className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 rounded-full px-2 py-1 text-xs"
                      >
                        <span>{reaction.emoji}</span>
                        <span>{reaction.count}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={`Message #${selectedChannel.name}`}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <AtSign className="w-4 h-4" />
                </button>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <Smile className="w-4 h-4" />
                </button>
              </div>
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="p-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamChat; 