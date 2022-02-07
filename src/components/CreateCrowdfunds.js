import React, { useState } from 'react'

function CreateCrowdfund({toggleModal}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [target, setTarget] = useState(0)
  const [showVoteNotification, setShowVoteNotification] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    window.contract.add_crowdfund({title:title, donate:target * 1, description:description})
    setShowVoteNotification(!showVoteNotification)
    alert(`crowdfund info: ${title} ${target} ${description}`)
  }
console.log(`its ${toggleModal}`);
  return (
    <div>
      {toggleModal == true && (
        <div className='addcrowdfund'>
          <form onSubmit={handleSubmit}>
            <label>
              Enter project title:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              Enter donation target:
              <input
                type="number"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
              />
            </label>
            <label>
              Enter project description:
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <input type="submit" className='submit' />
          </form>
        </div>
      )}
      
      {showVoteNotification && <VoteNotification />}
    </div>
    
  )
}
function VoteNotification() {
  return (
    <aside>
      <footer>
        <div>✔ Succeeded </div> 
        <div>Added new project Just now</div>
      </footer>
    </aside>
  )
}

export default CreateCrowdfund
