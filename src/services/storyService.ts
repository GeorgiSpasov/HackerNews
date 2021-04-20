import {Story, User} from '../store/story/storyTypes';
import requester from '../utils/requester';

const _generateRandomIds = (count: number, ids: string[]) => {
  const randomIds = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * ids.length);
    const randomId = ids[randomIndex];
    randomIds.push(randomId);
  }
  return randomIds;
};

const fetchTopStories = async (): Promise<string[]> => {
  const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
  const storyIds = await requester.get(url);
  return storyIds as string[];
};

const fetchStoryItem = async (
  storyId: string,
): Promise<Omit<Story, 'user'>> => {
  const url = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;
  const storyItem = await requester.get(url);
  const mappedItem: Omit<Story, 'user'> = {
    id: storyItem.id,
    title: storyItem.title,
    url: storyItem.url,
    timestamp: storyItem.time * 1000,
    score: storyItem.score,
    authorId: storyItem.by,
  };
  return mappedItem;
};

const fetchUser = async (userId: string): Promise<User> => {
  const url = `https://hacker-news.firebaseio.com/v0/user/${userId}.json`;
  const user = await requester.get(url);
  return user;
};

const loadTopStories = async (count: number): Promise<Story[]> => {
  const topStoryIds = await fetchTopStories();
  const randomIds = _generateRandomIds(count, topStoryIds);
  const storyPromises = randomIds.map(id => fetchStoryItem(id));
  const stories = await Promise.all(storyPromises);
  const userPromises = stories.map(story => fetchUser(story.authorId));
  const users = await Promise.all(userPromises);
  stories.forEach((story, i) => (story.user = users[i]));
  stories.sort((a, b) => b.score - a.score);

  return stories as Story[];
};

const storyService = {
  loadTopStories,
  fetchStoryItem,
  fetchUser,
};

export default storyService;
