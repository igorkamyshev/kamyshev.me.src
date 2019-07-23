workflow "Check PR" {
  on = "pull_request"
  resolves = [
    "Static analysis",
  ]
}

action "Install dependency" {
  uses = "borales/actions-yarn@master"
  args = "install"
}

action "Static analysis" {
  uses = "borales/actions-yarn@master"
  needs = ["Install dependency"]
  args = "s lint"
}
