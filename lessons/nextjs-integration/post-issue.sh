TITLE=$1

CONTENT=`cat $2`
echo ${TITLE}
echo ${CONTENT}
ISSUE_NO=`gh issue create --title "${TITLE}" --body "$CONTENT"`
echo ${ISSUE_NO}
gh issue close ${ISSUE_NO}
