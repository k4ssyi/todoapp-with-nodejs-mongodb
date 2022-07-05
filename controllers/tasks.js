const getAllTasks = (req, res) => {
  res.send("タスクを全て取得");
};

const createTask = (req, res) => {
  res.send("タスクを新規作成");
};

const getSingleTask = (req, res) => {
  res.send("特定のタスクを取得");
};

const updateTask = (req, res) => {
  res.send("特定のタスクを更新");
};

const deleteTask = (req, res) => {
  res.send("特定のタスクを削除");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
