export interface ActivitiesList {
  activitiesList: Activity[];
}

export interface Activity {
  _key: string;
  _type: string;
  subActivities: SubActivity[];
  title: string;
  description?: Description;
}

export interface SubActivity {
  _key: string;
  _type: string;
  description: Description[];
  hours: Hour[];
  title: string;
}

export interface Description {
  _key: string;
  _type: string;
  children: Children[];
  markDefs: false[];
  style: string;
}

export interface Children {
  _key: string;
  _type: string;
  marks: false[];
  text: string;
}

export interface Hour {
  _key: string;
  _type: string;
  dayOfWeek: string;
  time: string;
}

export interface MySchema {
  _createdAt: string;
  _id: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: string;
  activitiesList: Activity[];
}
