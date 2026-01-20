import { useEffect, useRef } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'
import './App.css'

function App() {
  const calendarRef = useRef(null)

  // Initial events
  const initialEvents = [
    {
      id: '1',
      title: 'Wedding Dance - Smith',
      start: '2026-01-22T14:00:00',
      end: '2026-01-22T15:00:00',
    },
    {
      id: '2',
      title: 'First Dance - Johnson',
      start: '2026-01-23T16:00:00',
      end: '2026-01-23T17:00:00',
    }
  ]

  // Mocked pending couples
  const pendingCouples = [
    {
      id: 1,
      names: 'Florin & Andreea',
      weddingDate: '2026-02-28',
      song: 'Julieta',
      style: 'Kizomba'
    },
    {
      id: 2,
      names: 'Maria & Alex',
      weddingDate: '2026-03-15',
      song: 'Perfect - Ed Sheeran',
      style: 'Waltz'
    },
    {
      id: 3,
      names: 'Elena & Andrei',
      weddingDate: '2026-04-20',
      song: 'Thinking Out Loud',
      style: 'Rumba'
    },
    {
      id: 4,
      names: 'Diana & Mihai',
      weddingDate: '2026-05-10',
      song: 'All of Me',
      style: 'Contemporary'
    },
    {
      id: 5,
      names: 'Ana & Gabriel',
      weddingDate: '2026-06-05',
      song: 'A Thousand Years',
      style: 'Viennese Waltz'
    }
  ]

  useEffect(() => {
    // Initialize draggable elements once (StrictMode runs effects twice in dev)
    const draggableEl = document.getElementById('pending-couples-list')
    if (!draggableEl || draggableEl.dataset.fcDraggable === 'true') return

    draggableEl.dataset.fcDraggable = 'true'
    const draggable = new Draggable(draggableEl, {
      itemSelector: '.pending-couple',
      eventData: function(eventEl) {
        return {
          title: eventEl.getAttribute('data-title'),
          duration: '01:00',
          backgroundColor: '#667eea',
          borderColor: '#764ba2'
        }
      }
    })

    return () => {
      draggable.destroy()
      delete draggableEl.dataset.fcDraggable
    }
  }, [])

  const handleDateClick = (arg) => {
    alert('Date clicked: ' + arg.dateStr)
  }

  const handleEventClick = (info) => {
    alert('Event: ' + info.event.title)
  }

  const handleEventReceive = (info) => {
    // When a pending couple is dropped on the calendar
    console.log('New lesson scheduled:', info.event.title)
  }

  const handleEventDrop = (info) => {
    // When an existing event is moved
    console.log('Lesson rescheduled:', info.event.title)
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Dansul Mirilor - Dance Lessons</h1>
      </header>
      <div className="main-content">
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2>Pending Couples</h2>
            <span className="badge">{pendingCouples.length}</span>
          </div>
          <div id="pending-couples-list" className="pending-couples-list">
            {pendingCouples.map(couple => (
              <div
                key={couple.id}
                className="pending-couple"
                data-title={`${couple.names} - ${couple.style}`}
              >
                <div className="couple-header">
                  <span className="couple-names">💑 {couple.names}</span>
                </div>
                <div className="couple-details">
                  <div className="detail-item">
                    <span className="label">Wedding:</span>
                    <span>{new Date(couple.weddingDate).toLocaleDateString()}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Style:</span>
                    <span>{couple.style}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Song:</span>
                    <span className="song">{couple.song}</span>
                  </div>
                </div>
                <div className="drag-hint">Drag to schedule →</div>
              </div>
            ))}
          </div>
        </aside>
        <div className="calendar-container">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            initialEvents={initialEvents}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
            eventReceive={handleEventReceive}
            eventDrop={handleEventDrop}
            editable={true}
            droppable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            slotMinTime="08:00:00"
            slotMaxTime="22:00:00"
            allDaySlot={false}
            height="auto"
          />
        </div>
      </div>
    </div>
  )
}

export default App
