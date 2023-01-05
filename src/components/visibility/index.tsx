function Visibility({ visible, children }: { visible: boolean; children: React.ReactNode }) {
  if (!visible) return null;

  return children;
}

export default Visibility;
