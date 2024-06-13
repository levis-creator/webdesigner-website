
function Table() {
  const userDetails={
    username:"Mac Doe",
  dob:"30th june 1957",
  address:"  Elice tower along Kangundo road",
  zip:"00900",
  email:"joedoe@email.com",
  phone:"+25498765432",
  }
  return (
    <table>
    <tbody>
    <tr>
      <th scope='row'>Name:</th>
      <td>
        {userDetails.username}
      </td>
    </tr>
    <tr>
      <th scope='row'>Date of Birth:</th>
      <td>
      {
        userDetails.dob
      }
      </td>
    </tr>
    <tr>
      <th scope='row'>Address:</th>
      <td>
      {userDetails.address}
      </td>
    </tr>
    <tr>
      <th scope='row'>Zip Code:</th>
      <td>
      {userDetails.zip}
      </td>
    </tr>
    <tr>
      <th scope='row'>Email:</th>
      <td>
      {userDetails.email}
      </td>
    </tr>
    <tr>
      <th scope='row'>Phone:</th>
      <td>
      {userDetails.phone}
      </td>
    </tr>
    </tbody>
    </table>
  )
}

export default Table