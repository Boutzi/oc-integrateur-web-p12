/* eslint-disable @next/next/no-img-element */
import { Building, Calendar, MapPin, School, ScrollText } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

export interface EducationCardProps {
  school?: string;
  logo: string;
  banner?: string;
  location?: string;
  year: string;
  course?: string;
  honors?: boolean;
  degree?: string;
  description: string;
  skills: string[];
  issuer?: string;
  certification?: string;
}

export const EducationCard = (props: EducationCardProps) => {
  return (
    <Card className="mx-auto flex p-8 gap-6 max-md:flex-col">
      <div>
        <CardHeader className="border-b flex-row gap-4 items-start p-0 pb-4">
          <div className="w-24 h-24 bg-white p-2 rounded-lg aspect-square">
            <img
              src={props.logo}
              alt={`${props.school} logo`}
              className=" object-contain rounded aspect-square"
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-start justify-between w-full">
              <CardTitle className="text-2xl text-primary">
                {props.course ? props.course : props.certification}
              </CardTitle>
            </div>
            <div className="w-full">
              <CardDescription className="flex gap-3 items-center text-xs max-sm:flex-col max-sm:gap-1 max-sm:items-start flex-wrap">
                {props.school ? (
                  <span className="flex gap-1 items-center">
                    <School size={14} />
                    {props.school}
                  </span>
                ) : props.issuer ? (
                  <span className="flex gap-1 items-center">
                    <Building size={14} />
                    {props.issuer}
                  </span>
                ) : (
                  ""
                )}
                {props.location ? (
                  <span className="flex gap-1 items-center">
                    <MapPin size={14} />
                    {props.location}
                  </span>
                ) : (
                  ""
                )}
                <span className="flex gap-1 items-center">
                  <Calendar size={14} />
                  {props.year}
                </span>
                {props.degree ? (
                  <span className="flex gap-1 items-center">
                    <ScrollText size={14} />
                    {props.degree}
                  </span>
                ) : (
                  ""
                )}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex items-start flex-col p-0 py-4 w-full gap-4">
          <div>
            <p className="leading-relaxed text-md">{props.description}</p>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4 px-0 pb-0 gap-2 flex-wrap">
          {props.skills.map((skill, index) => (
            <Badge
              key={index}
              variant={"outline"}
              className="font-light rounded-full overflow-hidden text-ellipsis whitespace-nowrap"
            >
              {skill}
            </Badge>
          ))}
        </CardFooter>
      </div>
    </Card>
  );
};
