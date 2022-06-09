import Card from '../UI/Card';
import './ClassSchedule.css';

const ClassSchedule = () => {
  return (
    <Card>
      <section>
        <h1>Classroom Schedule</h1>
        <table>
          <tr>
            <th>Class</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
          <tr>
            <td>WU21</td>
            <td>Floor 5: room 5</td>
            <td>-</td>
            <td>Floor 5: room 5</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>.NET21</td>
            <td>Floor 5: room 2</td>
            <td>-</td>
            <td>Floor 5: room 2</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>FEU21</td>
            <td>Floor 5: room 1</td>
            <td>-</td>
            <td>Floor 5: room 1</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>ITP21</td>
            <td>Floor 6: room 8</td>
            <td>-</td>
            <td>Floor 6: room 8</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>AU21</td>
            <td>-</td>
            <td>Floor 5: room 5</td>
            <td>-</td>
            <td>Floor 5: room 5</td>
            <td>-</td>
          </tr>
          <tr>
            <td>JSU21</td>
            <td>-</td>
            <td>Floor 5: room 3</td>
            <td>Floor 5: room 1</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>JU21</td>
            <td>-</td>
            <td>Floor 5: room 2</td>
            <td>-</td>
            <td>Floor 5: room 2</td>
            <td>-</td>
          </tr>
          <tr>
            <td>WU20</td>
            <td>-</td>
            <td>Floor 6: room 7</td>
            <td>-</td>
            <td>Floor 6: room 8</td>
            <td>Floor 5: room 4</td>
          </tr>
          <tr>
            <td>.NET20</td>
            <td>Floor 5: room 4</td>
            <td>Floor 6: room 8</td>
            <td>-</td>
            <td>-</td>
            <td>Floor 5: room 2</td>
          </tr>
          <tr>
            <td>FEU20</td>
            <td>-</td>
            <td>Floor 5: room 5</td>
            <td>-</td>
            <td>Floor 5: room 5</td>
            <td>-</td>
          </tr>
          <tr>
            <td>AU20</td>
            <td>-</td>
            <td>Floor 5: room 4</td>
            <td>-</td>
            <td>Floor 5: room 4</td>
            <td>-</td>
          </tr>
          <tr>
            <td>JSU20</td>
            <td>Floor 5: room 3</td>
            <td>-</td>
            <td>-</td>
            <td>Floor 5: room 3</td>
            <td>-</td>
          </tr>
        </table>
      </section>
    </Card>
  );
};

export default ClassSchedule;
