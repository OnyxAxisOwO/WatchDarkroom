// 列表原地同步：避免每次渲染整体替换数组，导致快应用把 for 子树全部销毁重建。
// 只写入真正发生变化的字段；长度变化时用 push/splice 做增量增删。
export function syncList(dst, src) {
  var n = src.length
  var m = dst.length
  var i
  for (i = 0; i < n && i < m; i++) syncItem(dst[i], src[i])
  if (m > n) {
    dst.splice(n, m - n)
  } else {
    for (i = m; i < n; i++) dst.push(src[i])
  }
  return dst
}

function syncItem(a, b) {
  for (var k in b) {
    var bv = b[k]
    if (bv instanceof Array) {
      if (a[k] instanceof Array) syncList(a[k], bv)
      else a[k] = bv
    } else if (a[k] !== bv) {
      a[k] = bv
    }
  }
}
