import profileImg from '../../assets/profile.png'

export default function ProfileAvatar({ className = "w-32 h-32 sm:w-40 sm:h-40" }) {
  return (
    <div className={`relative rounded-3xl overflow-hidden ring-4 ring-blue-100 shadow-md bg-slate-900 shrink-0 ${className}`}>
      <img
        src={profileImg}
        alt="Profile"
        className="w-full h-full object-cover"
      />
      <span
        className="absolute bottom-2 right-2 w-3.5 h-3.5 bg-emerald-500 rounded-full ring-2 ring-white"
        title="Available for projects"
      />
    </div>
  )
}
