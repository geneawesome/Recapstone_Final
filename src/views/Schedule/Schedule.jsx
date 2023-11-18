import React from "react";
import Table from "react-bootstrap/Table";
import "./Schedule.css";
const Schedule = () => {
  return (
    <section id="schedule">
      <Table striped bordered hover size="lg ">
        <thead>
          <h2 className="sched">Schedule of Cruises:</h2>
          <tr>
            <th className="w-25 p-3">Schedule</th>
            <th className="w-25 p-3">Destination</th>
            <th className="w-25 p-3">Ferry Type</th>
            <th className="w-25 p-3">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5:00 AM</td>
            <td>Manila</td>
            <td>Regular</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>5:00 AM</td>
            <td>Manila</td>
            <td>Deluxe</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>5:00 AM</td>
            <td>Manila</td>
            <td>Super Deluxe</td>
            <td>3000</td>
          </tr>

          <td className="p-2"></td>

          <tr>
            <td>6:00 AM</td>
            <td>Cagayan</td>
            <td>Regular</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>6:00 AM</td>
            <td>Cagayan</td>
            <td>Deluxe</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>6:00 AM</td>
            <td>Cagayan</td>
            <td>Super Deluxe</td>
            <td>3000</td>
          </tr>
          <td className="p-2"></td>

          <tr>
            <td>7:00 AM</td>
            <td>Davao</td>
            <td>Regular</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>7:00 AM</td>
            <td>Davao</td>
            <td>Deluxe</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>7:00 AM</td>
            <td>Davao</td>
            <td>Super Deluxe</td>
            <td>3000</td>
          </tr>
          <td className="p-2"></td>
          <tr>
            <td>8:00 AM</td>
            <td>Cebu</td>
            <td>Regular</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>8:00 AM</td>
            <td>Cebu</td>
            <td>Deluxe</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>8:00 AM</td>
            <td>Cebu</td>
            <td>Super Deluxe</td>
            <td>3000</td>
          </tr>
          <td className="p-2"></td>
          <tr>
            <td>9:00 AM</td>
            <td>Palawan</td>
            <td>Regular</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>9:00 AM</td>
            <td>Palawan</td>
            <td>Deluxe</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>9:00 AM</td>
            <td>Palawan</td>
            <td>Super Deluxe</td>
            <td>3000</td>
          </tr>
          <td className="p-2"></td>
          <tr>
            <td>10:00 AM</td>
            <td>Siargao</td>
            <td>Regular</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>10:00 AM</td>
            <td>Siargao</td>
            <td>Deluxe</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>10:00 AM</td>
            <td>Siargao</td>
            <td>Super Deluxe</td>
            <td>3000</td>
          </tr>
          <td className="p-2"></td>
          <tr>
            <td>11:00 AM</td>
            <td>Ilo-Ilo</td>
            <td>Regular</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>11:00 AM</td>
            <td>Ilo-Ilo</td>
            <td>Deluxe</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>11:00 AM</td>
            <td>Ilo-Ilo</td>
            <td>Super Deluxe</td>
            <td>3000</td>
          </tr>
          <td className="p-2"></td>
          <tr>
            <td>1:00 PM</td>
            <td>Boracay</td>
            <td>Regular</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>1:00 PM</td>
            <td>Boracay</td>
            <td>Deluxe</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>1:00 PM</td>
            <td>Boracay</td>
            <td>Super Deluxe</td>
            <td>3000</td>
          </tr>
          <td className="p-2"></td>
          <tr>
            <td>2:00 PM</td>
            <td>Bohol</td>
            <td>Regular</td>
            <td>3000</td>
          </tr>
          <tr>
            <td>2:00 PM</td>
            <td>Bohol</td>
            <td>Deluxe</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>2:00 PM</td>
            <td>Bohol</td>
            <td>Super Deluxe</td>
            <td>3000</td>
          </tr>
          <td className="p-2"></td>
          <tr>
            <td>3:00 PM</td>
            <td>Surigao</td>
            <td>Regular</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>3:00 PM</td>
            <td>Surigao</td>
            <td>Deluxe</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>3:00 PM</td>
            <td>Surigao</td>
            <td>Super Deluxe</td>
            <td>3000</td>
          </tr>
          <td className="p-2"></td>
        </tbody>
      </Table>
    </section>
  );
};

export default Schedule;
