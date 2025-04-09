import React from 'react';
interface CommitteeMemberProps {
  name: string;
  designation: string;
  occupation: string;
  photo: string;
}
export const CommitteeMemberCard: React.FC<CommitteeMemberProps> = ({
  name,
  designation,
  occupation,
  photo
}) => {
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden border-2 border-[#7209b7] hover:border-[#f72585] transition-all duration-200 p-6">
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#7209b7] mb-4">
          <img src={photo} alt={`${name} - ${designation}`} className="w-full h-full object-cover" />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-[#3a0ca3] mb-2">{name}</h3>
          <p className="text-[#7209b7] font-medium mb-1">{designation}</p>
          <p className="text-gray-600 text-sm">{occupation}</p>
        </div>
      </div>
    </div>;
};