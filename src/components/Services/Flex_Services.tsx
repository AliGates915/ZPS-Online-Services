import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

// Define the props interface
interface ProfileCardProps {
  imageSrc: string;
  name: string;
  tags: string[];
}

// Define the ProfileCard component with props
const ProfileCard: React.FC<ProfileCardProps> = ({ imageSrc, name, tags }) => {
  return (
    <Card className="w-96 shadow-lg hover:shadow-xl transition-shadow duration-300" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
      <CardHeader floated={false} className="h-80" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
      <img
          src={imageSrc} 
          alt="profile-picture"
          className="object-cover h-full w-full"
        />
      </CardHeader>
      <CardBody className="pt-3 text-center" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
      <Typography variant="h4" color="blue-gray" className="mb-2" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>

          {name}
        </Typography>
      </CardBody>
      
      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <CardFooter className="flex justify-center pb-3" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>

      <Button variant="gradient" color="blue" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>

          Download
        </Button>
      </CardFooter>
    </Card>
  );
};

// Define the Flex_Services component
export const Flex_Services: React.FC = () => {
  return (
    <div className="mt-2 flex flex-row justify-evenly">
      <ProfileCard
        imageSrc="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/quaid-e-azam-day-flyer-template-design-3595bb512ac8fcb7a4c7a44473029423_screen.jpg?ts=1704109198"
        name="Quiad-e-Azam Birthday"
        tags={['quiadeazam', 'babaquiad','founder','quiadeazamdesign','newdesign2024']}
      />
      <ProfileCard
        imageSrc="https://docs.material-tailwind.com/img/team-2.jpg"
        name="John Doe"
        tags={['design', 'development', 'innovation']}
      />
      <ProfileCard
        imageSrc="https://docs.material-tailwind.com/img/team-1.jpg"
        name="Jane Smith"
        tags={['marketing', 'sales', 'growth']}
      />
    </div>
  );
};

export default Flex_Services;
