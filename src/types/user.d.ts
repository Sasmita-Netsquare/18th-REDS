type User = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  role: string;
};

type Event = {
  id: number;
  name: string;
  venue: string;
  start_date: string;
  end_date: string;
};

type EventAdmin = {
  parentId: null;
  id: number;
  event_id: number;
  user_id: string;
  created_at: string;
  updated_at: string;
  user: User;
  event: Event;
};

type RegistrationsArray = EventAdmin[];
