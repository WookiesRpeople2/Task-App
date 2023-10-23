import { useWorkspaceContext } from "../../hooks/useWorkspaceContext";

const WorkspaceCard = ({ workspaceName }) => {
  return (
    <div>
      <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg my-10 px-3">
        <img
          className="w-full"
          src="https://th.bing.com/th/id/R.acb1b8a6eee092820f94780b6b6cc9d7?rik=jm93Dg38n2m4vQ&riu=http%3a%2f%2ffullhdwall.com%2fwp-content%2fuploads%2f2016%2f03%2fCool-Landscape.jpg&ehk=mA%2bxJ15%2flbnOffwL5ZUBWVpozlYckBhs38KIVaU%2btjs%3d&risl=&pid=ImgRaw&r=0"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{workspaceName}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceCard;
