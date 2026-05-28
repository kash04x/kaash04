import React from 'react';

function SidemenuList({ data, legend, activeKey, setActiveKey, getItemKey, maxItemsBeforeScroll = 5, className, flexSkills, nonInteractive }) {
  const needsScroll = data.length > maxItemsBeforeScroll;
  const itemHeight = 40; // px, adjust if needed
  const maxHeight = maxItemsBeforeScroll * itemHeight;

  const listContent = (
    <>
      {data.map((item, idx) => {
        const key = getItemKey ? getItemKey(item, idx) : idx;
        const isActive = !nonInteractive && activeKey === key;
        return (
          <div
            key={key}
            className={`experienceEntry${isActive ? ' active' : ''}${nonInteractive ? ' nonInteractive' : ''}`}
            onClick={nonInteractive ? undefined : () => setActiveKey(key)}
          >
            <div className="experienceFlex">
              <span className="roleFlex" style={{ textAlign: 'left', flex: 1 }}>{item.label}</span>
            </div>
          </div>
        );
      })}
    </>
  );

  // For skills section, always render the scrollableSkillsList div
  if (className === 'scrollableSkillsList') {
    return (
      <fieldset
        className={`sidemenuItem${flexSkills ? ' skillsFieldset' : ''}`}
      >
        <legend>{legend}</legend>
        <div className={className}>
          {listContent}
        </div>
      </fieldset>
    );
  }

  // For other lists, use the old logic
  return (
    <fieldset className="sidemenuItem">
      <legend>{legend}</legend>
      {needsScroll ? (
        <div className={className || "scrollableList"} style={{ maxHeight: maxHeight + 'px' }}>
          {listContent}
        </div>
      ) : (
        listContent
      )}
    </fieldset>
  );
}

export default SidemenuList;
