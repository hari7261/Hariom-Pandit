import React from "react";

const GitHubStats = () => {
    return (
        <div className="space-y-4">
            <img
                src="https://github-readme-stats.vercel.app/api?username=hari7261&show_icons=true&theme=radical"
                alt="GitHub Stats"
                className="w-full rounded-lg"
            />
            <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=hari7261&layout=compact&theme=radical"
                alt="Top Languages"
                className="w-full rounded-lg"
            />
        </div>
    );
};

export default GitHubStats;