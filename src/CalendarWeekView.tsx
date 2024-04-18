const eventsData = [
    {
      id: 1,
      title: '10:35 AM - 11:40 AM - Meeting with Client',
      start: new Date(2024, 3, 15, 10, 35),
      end: new Date(2024, 3, 15, 11, 40),
      color: '#1976D2'
    },
    {
      id: 2,
      title: '11:45 AM - 1:00 PM - Lunch Break',
      start: new Date(2024, 3, 15, 11, 45),
      end: new Date(2024, 3, 15, 13, 0),
      color: '#388E3C'
    },
    {
      id: 3,
      title: '2:00 PM - Team Meeting',
      start: new Date(2024, 3, 16, 14, 0),
      end: new Date(2024, 3, 16, 15, 0),
      color: '#FF9800'
    },
    {
        id: 4,
        title: '2:00 PM - Team Meeting',
        start: new Date(2024, 3, 15, 8, 0),
        end: new Date(2024, 3, 15, 10, 0),
        color: '#FF9800'
      },
    // Add more events here
  ];

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const CalendarWeekView = () => {
    const calculateEventPosition = (event) => {
      const startHour = event.start.getHours();
      const startMinutes = event.start.getMinutes();
      const endHour = event.end.getHours();
      const endMinutes = event.end.getMinutes();
      const startMinutesOfDay = startHour * 60 + startMinutes;
      const endMinutesOfDay = endHour * 60 + endMinutes;
      const totalMinutes = 12 * 60; // Total minutes from 8:00 AM to 8:00 PM
      const top = ((startMinutesOfDay - 8 * 60) * 100 / totalMinutes) + 4;
      const height = (endMinutesOfDay - startMinutesOfDay) * 100 / totalMinutes;
      return { top: `${top}%`, height: `${height}%` };
    };
  
    const renderEventsForDay = (day) => {
      const dayEvents = eventsData.filter(event => event.start.getDay() === day);
      return dayEvents.map(event => {
        const eventStyle = {
          backgroundColor: event.color,
          color: '#FFF',
          padding: '5px',
          borderRadius: '5px',
          marginBottom: '0px',
          position: 'absolute',
          width: 'calc(100%)',
          left: '0',
          ...calculateEventPosition(event)
        };
  
        return (
          <div key={event.id} style={eventStyle}>
            <strong>{event.title}</strong>
          </div>
        );
      });
    };

    return (
        <div style={{ display: 'flex', overflowX: 'auto', height: '100vh' }}>
          {daysOfWeek.map((day, index) => (
            <div key={index} style={{ flex: '1', borderRight: '1px solid #ccc' }}>
              <div style={{ padding: '1px', borderBottom: '1px solid #ccc' }}>{day}</div>
              <div style={{ position: 'relative', height: '100%' }}>
                {renderEventsForDay(index + 1)} {/* Adding 1 to match JavaScript's day indices */}
              </div>
            </div>
          ))}
        </div>
      );
  };
  

export default CalendarWeekView;