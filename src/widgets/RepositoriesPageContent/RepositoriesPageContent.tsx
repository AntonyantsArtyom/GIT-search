import { useEffect, useMemo, useState } from "react";
import { RepositoryList } from "../../entities/Repository/UI/RepositoryList";
import type { RootState } from "../../store";
import { useSelector } from "react-redux";
import { HelloMessage } from "../../shared/HelloMessage/HelloMessage";
import { NotFountMessage } from "../../shared/NotFountMessage/NotFountMessage";
import { LoadingMessage } from "../../shared/LoadingMessage/HelloMessage";

export const RepositoriesPageContent = () => {
  const [isHelloMessage, setIsHelloMessage] = useState(true);
  const { repositories, isLoading } = useSelector((state: RootState) => state.repositories);

  useEffect(() => {
    if (isLoading) {
      setIsHelloMessage(false);
    }
  }, [isLoading]);

  const BlockForRender = useMemo(() => {
    if (isHelloMessage) {
      return <HelloMessage />;
    }
    if (isLoading) {
      return <LoadingMessage />;
    }
    if (!isHelloMessage && !repositories.length) {
      return <NotFountMessage />;
    }
    return <RepositoryList />;
  }, [isHelloMessage, repositories, isLoading]);

  return <>{BlockForRender}</>;
};
