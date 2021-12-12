function makeFriendsList(friends) {
  let list = document.createElement("ul");
  friends.forEach((friend) => {
    let item = document.createElement("li");
    item.innerText = `${friend.firstName} ${friend.lastName}`;
    list.append(item);
  });

  return list;
}
