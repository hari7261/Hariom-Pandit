import { useEffect, useState } from "react";
import { Github, Users, GitFork } from "lucide-react";

// Define a simple Card component
const Card = ({ children, className = "" }) => {
  return (
    <div className={`rounded-lg border bg-background p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
};

// Define a simple Skeleton component
const Skeleton = ({ className = "" }) => {
  return <div className={`animate-pulse rounded-md bg-muted ${className}`} />;
};



export function GitHubProfile() {
  const [profile, setProfile] = useState < GitHubProfile | null > (null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/hari7261")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Card>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </Card>
    );
  }

  if (!profile) return null;

  return (
    <Card className="backdrop-blur-sm bg-card/50 border-primary/20">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={profile.avatar_url}
          alt={profile.name}
          className="w-24 h-24 rounded-full ring-2 ring-primary/20"
        />
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">{profile.name}</h3>
          <p className="text-muted-foreground mb-4">{profile.bio}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{profile.followers} followers</span>
            </div>
            <div className="flex items-center gap-2">
              <GitFork className="w-4 h-4" />
              <span>{profile.public_repos} repositories</span>
            </div>
            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
            >
              <Github className="w-4 h-4" />
              <span>View Profile</span>
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function GitHubActivity() {
  return (
    <div className="flex flex-wrap gap-4">
      <img
        src="https://img.shields.io/badge/Commits-100%2B-brightgreen"
        alt="Commits"
        className="rounded-lg"
      />
      <img
        src="https://img.shields.io/badge/PRs-20%2B-blue"
        alt="Pull Requests"
        className="rounded-lg"
      />
      <img
        src="https://img.shields.io/badge/Issues-10%2B-red"
        alt="Issues"
        className="rounded-lg"
      />
      <img
        src="https://img.shields.io/badge/Stars-50%2B-yellow"
        alt="Stars"
        className="rounded-lg"
      />
    </div>
  );
}

export function GitHubProfileInfo() {
  return (
    <Card className="backdrop-blur-sm bg-card/50 border-primary/20">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* GitHub Profile */}
        <div className="flex-1">
          <GitHubProfile />
        </div>

        {/* GitHub Activity */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">Activity</h3>
          <GitHubActivity />
        </div>
      </div>
    </Card>
  );
}