export default function AddInfo({listItem,onDelete}){
  return (
    <li>
      <dl>
        <dt>{listItem.petName}</dt>
        <dd>
          <dfn>예약자명</dfn>
          {listItem.ownerName}
        </dd>
        <dd> {listItem.aptNotes}</dd>
        <dd> {listItem.aptDate}</dd>
      </dl>
      <button 
      type="button"
      onClick = {
        () => onDelete(listItem.id)
      }
      >delete</button>
    </li>
  )
}