import React, { useEffect, useState } from "react";
import { FaStar, FaCodeBranch, FaUser, FaTools } from "react-icons/fa";

const GitHubBadges = () => {
    const [stars, setStars] = useState(0);
    const [forks, setForks] = useState(0);
    const [followers, setFollowers] = useState(0);

    useEffect(() => {
        // Fetch GitHub data
        const fetchGitHubData = async () => {
            try {
                const response = await fetch("https://api.github.com/users/hari7261");
                const data = await response.json();
                setStars(data.public_repos);
                setForks(data.public_gists);
                setFollowers(data.followers);
            } catch (error) {
                console.error("Error fetching GitHub data:", error);
            }
        };

        fetchGitHubData();
    }, []);

    return (
        <div className="grid grid-cols-2 gap-4">
            {/* Stars Badge */}
            <div className="flex items-center space-x-2 rounded-lg border border-gray-700 p-3">
                <FaStar className="text-yellow-400" />
                <div>
                    <p className="text-sm text-gray-300">Stars</p>
                    <p className="text-lg font-bold">{stars}</p>
                </div>
            </div>

            {/* Forks Badge */}
            <div className="flex items-center space-x-2 rounded-lg border border-gray-700 p-3">
                <FaCodeBranch className="text-blue-400" />
                <div>
                    <p className="text-sm text-gray-300">Forks</p>
                    <p className="text-lg font-bold">{forks}</p>
                </div>
            </div>

            {/* Followers Badge */}
            <div className="flex items-center space-x-2 rounded-lg border border-gray-700 p-3">
                <FaUser className="text-green-400" />
                <div>
                    <p className="text-sm text-gray-300">Followers</p>
                    <p className="text-lg font-bold">{followers}</p>
                </div>
            </div>

            {/* Tools Badge */}
            <div className="flex items-center space-x-2 rounded-lg border border-gray-700 p-3">
                <FaTools className="text-purple-400" />
                <div>
                    <p className="text-sm text-gray-300">Tools</p>
                    <p className="text-lg font-bold">10+</p>
                </div>
            </div>
        </div>
    );
};

export default GitHubBadges;